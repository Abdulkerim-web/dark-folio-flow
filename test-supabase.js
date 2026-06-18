import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import ws from 'ws'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('URL:', supabaseUrl);
console.log('Key (first 20 chars):', supabaseAnonKey?.substring(0, 20) + '...');

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: fetch,
  },
  realtime: {
    transport: ws,
  },
});

async function testConnection() {
  try {
    console.log('\n🔍 Testing Supabase connection...');
    
    // First, try to list all tables in the database
    console.log('\n📋 Checking available tables...');
    const { data: tables, error: tablesError } = await supabase
      .rpc('list_tables')
    
    if (tablesError) {
      console.log('⚠️  Could not list tables:', tablesError.message);
      console.log('   This might be due to permissions or the function not existing');
    } else {
      console.log('✅ Available tables:', tables);
    }
    
    // Try to access the contact_submissions table directly
    console.log('\n🔍 Testing contact_submissions table access...');
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('\n❌ Error:', error.message);
      console.error('Code:', error.code);
      console.error('Details:', error.details);
      
      if (error.code === 'PGRST116') {
        console.log('\n💡 The table exists but is empty (expected for new tables)');
      } else if (error.code === 'PGRST301') {
        console.log('\n💡 Table not found - you may need to create it');
        console.log('\n📋 To create the table, run:');
        console.log('   node create-table.js');
      } else {
        console.log('\n💡 Check your Supabase project and table permissions');
      }
      return false;
    }
    
    console.log('\n✅ Connection successful!');
    console.log('Table exists and is accessible');
    return true;
  } catch (err) {
    console.error('\n❌ Connection failed:', err.message);
    return false;
  }
}

testConnection();
