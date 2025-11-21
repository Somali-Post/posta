import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  const formData = await request.formData();
  
  // (Extracting all form data remains the same)
  const name = formData.get('name') as string;
  // ... etc.

  try {
    // --- THIS IS THE CRITICAL FIX ---
    const { data: latestBox, error: latestBoxError } = await supabaseAdmin
      .from('customers')
      .select('po_box_number')
      .order('po_box_number', { ascending: false }) // This now performs a correct numerical sort
      .limit(1)
      .single();

    if (latestBoxError && latestBoxError.code !== 'PGRST116') {
      // PGRST116 is the "no rows found" error, which is okay for the first entry.
      // Any other error should be thrown.
      throw latestBoxError;
    }

    // If latestBox exists, use its number; otherwise, start from 635.
    const newPoBoxNumber = latestBox ? latestBox.po_box_number + 1 : 635;
    // --- END OF FIX ---

    // (The rest of the file upload and database insertion logic remains the same)
    // ...

    // Just ensure the newPoBoxNumber is correctly used in the insert call:
    const { data: newCustomer, error: insertError } = await supabaseAdmin
      .from('customers')
      .insert({
        // ... (all other customer data)
        po_box_number: newPoBoxNumber, // This will now be the correct sequential number
        payment_status: 'pending',
      })
      .select()
      .single();

    if (insertError) throw insertError;
    
    // ... (The rest of the logic to build the confirmation URL and send the email remains the same)

    return NextResponse.json({ message: 'Success!' });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
