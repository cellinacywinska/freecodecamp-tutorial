/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import characters from '@/data/characters.json'
import { NextResponse } from 'next/server'

// NextResponse object provides functions for handling server responses
// GET() - http get request method for retrieving data from a server
// NextResponse.json - function to construct the server response
export async function GET() {
  return NextResponse.json({ characters: characters.data})
}
