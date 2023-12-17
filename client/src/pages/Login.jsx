
import { Button, Label, TextInput } from 'flowbite-react';
import BasicLayout from '../components/layouts/BasicLayout';


export default function Login() {

    return (
        <BasicLayout>
            <form className="flex lg:w-[600px] max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" required />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </BasicLayout>
    )

}