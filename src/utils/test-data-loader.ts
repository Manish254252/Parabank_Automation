import * as fs from 'fs';
import * as path from 'path';

export interface SignupRegistrationData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  ssn: string;
}

interface SignupDataFile {
  registration: SignupRegistrationData;
}

const signupDataPath = path.join(__dirname, '..', 'test-data', 'signup-data.json');

export function loadSignupTestData(): SignupRegistrationData {
  const raw = fs.readFileSync(signupDataPath, 'utf-8');
  const data = JSON.parse(raw) as SignupDataFile;
  return data.registration;
}
