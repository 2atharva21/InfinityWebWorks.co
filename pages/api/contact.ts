import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    try {
      // Log the form data to the console
      console.log('Form submitted:', { name, email, message })
      res.status(200).json({ message: 'Form submitted successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Error submitting form' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
