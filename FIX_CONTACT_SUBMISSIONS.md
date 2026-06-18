# Fix for "Could not find the table 'public.contact_submissions' in the schema cache" Error

## Problem
The error "Could not find the table 'public.contact_submissions' in the schema cache" occurs when the `contact_submissions` table doesn't exist in the Supabase database.

## Solution
Run the SQL migration to create the table in your Supabase project.

## Steps

### 1. Generate the SQL
Run this command to get the SQL needed to create the table:

```bash
node create-table.js
```

### 2. Run the SQL in Supabase
Copy the SQL output and run it in your Supabase SQL editor:
1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Paste the SQL and run it

### 3. Test the Connection
After creating the table, run:

```bash
node apply-migration.js
```

This will:
- Check if the table exists
- Insert test data if the table exists
- Provide clear error messages if there are issues

## Alternative: Quick Fix
If you want to create the table and test it in one step, run:

```bash
node apply-migration-fixed.js
```

This script will automatically create the table if it doesn't exist and then insert test data.

## Files Created/Modified

### New Files:
- `create-table.js` - Outputs the SQL needed to create the contact_submissions table
- `apply-migration-fixed.js` - Robust migration script that creates the table if it doesn't exist

### Modified Files:
- `apply-migration.js` - Updated with better error handling and instructions
- `test-supabase.js` - Updated with helpful error messages and instructions
- `README.md` - Updated with clear instructions for fixing the issue

## Verification
After running the migration, you can verify the table exists by running:

```bash
node test-supabase.js
```

This will test the connection and show if the table is accessible.
