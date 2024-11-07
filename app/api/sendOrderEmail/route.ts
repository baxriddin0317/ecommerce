import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { clientName, clientLastName, clientPhone, date, basketItems, totalPrice, totalQuantity } = await req.json();
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "megahomeweb@gmail.com",
      pass: "soboyxmpyibxbvzu",
    },
  });

  const orderDetails = basketItems.map((item: any) => `${item.title} - ${item.quantity} buyurtma qilingan`).join(',').join('\n');

  const mailOptions = {
    from: "megahomeweb@gmail.com",
    to: 'megahomeweb@gmail.com',
    subject: `New Order from ${clientName} ${clientLastName}`,
    text: `
      A new order has been placed! in kursiy
      Order Details:
      Name: ${clientName} ${clientLastName}
      Phone: ${clientPhone}
      Date: ${date}

      items:
      ${orderDetails}

      Total Price: ${totalPrice}
      Total Quantity: ${totalQuantity}
    `,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "POST request received" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}