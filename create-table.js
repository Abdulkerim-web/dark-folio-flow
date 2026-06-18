#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const migrationPath = path.join(process.cwd(), 'supabase/migrations/20240520120000_init_portfolio_tables.sql')
const sql = fs.readFileSync(migrationPath, 'utf8')

console.log('=== SQL Migration for contact_submissions table ===')
console.log('\nRun this SQL in your Supabase SQL editor to create the table:')
console.log('\n' + sql)
console.log('\n=== End of SQL ===')

console.log('\n💡 After running the SQL, you can test the connection by running:');
console.log('   node apply-migration.js');
