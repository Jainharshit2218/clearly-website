import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tyggnmvdexepkzodaexa.supabase.co"
const supabaseAnonKey = "sb_publishable_FYC0KtYUDm2jcPA94urCRw_w5HlU_Ct"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)