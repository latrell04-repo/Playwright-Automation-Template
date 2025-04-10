import {test,expect} from '@playwright/test';
// Import the executeQuery method in here from utilities folder
import { executeQuery } from '../utilities/mssqlDb';

// Sample test case to fetch data from the database
test('Fetch data from database', async () => {
  const query = `Your SQL query here`;
  const result = await executeQuery(query);
  
  console.log('DB Result:', result);
  expect(result.length).toBeGreaterThan(0);
});