
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PROJECT_RESTFUL_ENDPOINT as string
const supabaseKey = process.env.EXPO_PROJECT_API_KEY as string

if (!supabaseUrl || !supabaseKey) {
	throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)