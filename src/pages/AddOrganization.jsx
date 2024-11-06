import { Form } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';

const AddOrganization = () => {
  return (
    <section className="grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-3"
      >
        <h4 className="text-center text-3xl font-bold">Add Organization</h4>
        <FormInput type="text" label="Org Name" name="orgName" />
        <FormInput type="text" label="Location" name="location" />
        <FormInput type="number" label="No of floors" name="numberOfFloors" />
        <FormInput type="text" label="Device info" name="deviceInfo" />
        <div className="mt-4">
          <SubmitButton text="Save" />
        </div>
      </Form>
    </section>
  );
};
export default AddOrganization;
