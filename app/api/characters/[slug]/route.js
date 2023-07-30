/**
 * Retrieves a character and their associated quotes based on the provided slug.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug of the character.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the character and their quotes, or an error response.
 */

import characters from '@/data/characters.json'
import qoutes from '@/data/qoutes.json'
import { NextResponse } from 'next/server'

// The function receives two parameters: req (representing the incoming request) 
// and an object called params which contains the dynamic parameters extracted from the request URL.
export async function GET(req, { params }) {
  // attempt to find a character in the data by comparing the slug parameter
  try {
    const character = characters.data.find(item => item.slug === params.slug)

    // error handling
    if (!character) {
      return new NextResponse('not found', { status: 404 })
    }

    const character_qoutes = qoutes.data.filter(
      item => item.character_id === character.id,
    )

    return NextResponse.json({
      character,
      character_qoutes: character_qoutes.length > 0 ? character_qoutes : null,
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// Next.js automatically extracts dynamic parameters 
// from the URL and makes them available in the params object.