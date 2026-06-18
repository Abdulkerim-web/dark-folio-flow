#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkTableExists(tableName: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1)
    
    if (error && error.code === 'PGRST301') {
      return false
    }
    return true
  } catch (err) {
    console.error('Error checking table existence:', err)
    return false
  }
}

async function runMigration() {
  try {
    const tableName = 'contact_submissions'
    const tableExists = await checkTableExists(tableName)
    
    if (!tableExists) {
      console.log('❌ Table "contact_submissions" does not exist!');
      console.log('\n📋 To fix this issue, run:');
      console.log('   node create-table.js');
      console.log('\n   This will output the SQL you need to run in your Supabase SQL editor.');
      return false
    }
    
    console.log('✅ Table exists, inserting test data...');
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: 'test',
          email: 'test@example.com',
          subject: 'test',
          message: 'test',
        },
      ])

    if (error) {
      console.error('Error inserting test data:', error)
      return false
    }

    console.log('✅ Migration completed successfully!');
    return true
  } catch (err) {
    console.error('Error running migration:', err)
    return false
  }
}

runMigration()