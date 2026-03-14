import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels = {
  kitchen: 'Κουζίνα',
  wardrobe: 'Ντουλάπα',
  door: 'Πόρτα',
  furniture: 'Ειδική Κατασκευή',
  other: 'Άλλο',
};

export async function POST(req) {
  try {
    const { name, email, phone, service_type, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Antimisaris Woodcraft <noreply@antimisariswoodcraft.gr>', // replace with your verified domain later
      to: 'antimisarisg@gmail.com',
      subject: `ANTIMISARIS-WOODCRAFT: Νέο μήνυμα από ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Νέο μήνυμα επικοινωνίας</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #57534e;">Ονοματεπώνυμο:</td>
              <td style="padding: 8px; color: #1c1917;">${name}</td>
            </tr>
            <tr style="background: #f5f5f4;">
              <td style="padding: 8px; font-weight: bold; color: #57534e;">Τηλέφωνο:</td>
              <td style="padding: 8px; color: #1c1917;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #57534e;">Email:</td>
              <td style="padding: 8px; color: #1c1917;">${email || '—'}</td>
            </tr>
            <tr style="background: #f5f5f4;">
              <td style="padding: 8px; font-weight: bold; color: #57534e;">Υπηρεσία:</td>
              <td style="padding: 8px; color: #1c1917;">${serviceLabels[service_type] || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #57534e; vertical-align: top;">Μήνυμα:</td>
              <td style="padding: 8px; color: #1c1917;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
