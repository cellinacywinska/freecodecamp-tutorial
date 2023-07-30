import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  // HTTP request to the API endpoint
    const data = await fetch(`${endpoint}/characters`)
  
    // error handling
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
}

export async function getCharacterBySlug() {}
