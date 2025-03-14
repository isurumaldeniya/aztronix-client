import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { customFetch } from '../utils';

// this function returns an async function. so if we invoke it once it will only return the function.
// It will not execute the function
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await customFetch.post('/auth/login', data);
      console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in Successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage = error.response.data || 'Please Try Agin!!!';
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center">Login</h4>
        <FormInput
          type="emailL"
          label="email"
          name="email"
          defaultValue="isuru@gmail.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="12345"
        />
        <div className="mt-4">
          <SubmitButton text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
