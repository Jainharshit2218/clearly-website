// // import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// // serve(async (req) => {
// //   try {
// //     const { email, discountCode } = await req.json()

// //     const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

// //     if (!RESEND_API_KEY) {
// //       return new Response(
// //         JSON.stringify({ error: "Missing RESEND_API_KEY" }),
// //         { status: 500 }
// //       )
// //     }

// //     const response = await fetch("https://api.resend.com/emails", {
// //       method: "POST",
// //       headers: {
// //         "Authorization": `Bearer ${RESEND_API_KEY}`,
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify({
// //         from: "CLEARLY <hello@tryclearly.in>",
// //         to: email,
// //         subject: "You're on the list 🎉 Here's 50% off",
// //         html: `
// //           <div style="font-family: Arial, sans-serif; padding: 40px;">
// //             <h2>Welcome to CLEARLY.</h2>
// //             <p>You're officially on the waitlist.</p>
// //             <p>As promised, here's your 50% launch discount:</p>
// //             <h1 style="letter-spacing: 2px;">${discountCode}</h1>
// //             <p>Use this when we launch.</p>
// //             <br/>
// //             <p>– Team CLEARLY</p>
// //           </div>
// //         `
// //       })
// //     })

// //     const data = await response.json()

// //     return new Response(JSON.stringify(data), {
// //       status: 200
// //     })

// //   } catch (error) {
// //     return new Response(
// //       JSON.stringify({ error: error.message }),
// //       { status: 500 }
// //     )
// //   }
// // })
// import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// import { Resend } from "npm:resend"

// const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

// serve(async (req) => {
//   // Handle CORS preflight
//   if (req.method === "OPTIONS") {
//     return new Response("ok", {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
//       },
//     })
//   }

//   try {
//     const { email, discountCode } = await req.json()

//     const data = await resend.emails.send({
//       from: "CLEARLY <onboarding@resend.dev>",
//       to: email,
//       subject: "Your 50% Discount Code 🎉",
//       html: `
//         <h2>Welcome to CLEARLY</h2>
//         <p>Your exclusive 50% discount code:</p>
//         <h1>${discountCode}</h1>
//         <p>Use it at checkout.</p>
//       `,
//     })

//     return new Response(JSON.stringify({ success: true }), {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       status: 200,
//     })
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       status: 500,
//     })
//   }
// })
// import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// serve(async (req) => {
//   // Handle CORS preflight
//   if (req.method === "OPTIONS") {
//     return new Response("ok", {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "authorization, content-type",
//       },
//     })
//   }

//   try {
//     const { email, discountCode } = await req.json()

//     // 🔥 TEMPORARY TEST
//     console.log("Email:", email)
//     console.log("Code:", discountCode)

//     return new Response(
//       JSON.stringify({ success: true }),
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     )
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: err.message }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     )
//   }
// })
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, content-type",
      },
    })
  }

  try {
    const { email, discountCode } = await req.json()

    console.log("Email:", email)
    console.log("Code:", discountCode)

    const { data, error } = await resend.emails.send({
      from: "CLEARLY <onboarding@resend.dev>",
      to: email,
      subject: "You're on the waitlist 🎉",
      html: `
        <div style="font-family: Arial; padding: 40px;">
          <h2>Welcome to CLEARLY</h2>
          <p>Your exclusive 50% discount code:</p>
          <h1>${discountCode}</h1>
          <p>Use it at launch.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend Error:", error)
      return new Response(
        JSON.stringify({ error }),
        { status: 400 }
      )
    }

    console.log("Resend Success:", data)

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 200,
      }
    )

  } catch (err) {
    console.error("Function Error:", err)
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
  }
})