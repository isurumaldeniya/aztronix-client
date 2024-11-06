import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/register', {
      ...data,
      orgName: 'Isuru Org',
      userId: 'USER-0002',
      orgId: 'ORG-0001',
    });

    toast.success('Account Created Successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage = error.response.data || 'Please Try Agin!!!';
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center">Register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
          defaultValue="yasiru"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="yasiru@gamil.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="1234"
        />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-primary link-hover capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
