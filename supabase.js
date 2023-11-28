import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wdbzbrunncztqsjzinjg.supabase.co'
export const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkYnpicnVubmN6dHFzanppbmpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTY0MDMsImV4cCI6MjAxNjY3MjQwM30.lAZkFDRPZxsMKOxDObJJm8FYLEgvAot78CUzdSLI1E0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
