import styled from 'styled-components';


const SignupForm = () => {
    return (

        <DivContainer>
            <h3 title='Please fill in all required fields and then press the submit button. All required fields are marked with an * (asterisk).'>Signup Form:</h3>

            <FormContainer>
                <Label htmlFor="username" title="Required field: Add a username, for example John Smith" >Username *</Label>
                <Input id="username" type="text" placeholder="John Smith" required></Input>

                <Label htmlFor="password" title="Required field: Add a password that has at least 8 characters.">Password *</Label>
                <Input id="password" type="password" placeholder="qzikgdavn" required></Input>

                <Label htmlFor="email" title="Required field: Add a valid email address.">Email *</Label>
                <Input id="email" type="email" placeholder="johnsmith@gmail.com" required></Input>

                <Label htmlFor="number" title="Add your phone number.">Phone number</Label>
                <Input id="number" type="number" placeholder="0123456789"></Input>


                <TOSConditionsContainer >
                    <Label title="Required: Check the Agree option, if you agree with out TOS. Otherwise you will not be able to proceed.">TOS Agreement *</Label>
                    <br />
                    <Label htmlFor="tos-conditions-agree" >I Agree *</Label>
                    <Input id="tos-conditions-agree" type="checkbox" required></Input> <br />

                    <Label htmlFor="tos-conditions-disagree" >I Disagree</Label>
                    <Input id="tos-conditions-disagree" type="checkbox"></Input>
                </TOSConditionsContainer>

                <Label htmlFor="date-birth" title="Add your date of birth. Accepted format: 04.03.2025">Date of birth</Label>
                <Input id="date-birth" type="date"></Input>

                <Button id="submit-button" type="submit" >Submit button</Button>
            </FormContainer>
        </DivContainer >

    )
}



const Input = styled.input`
`

const Label = styled.label`
    margin-top: 2rem;
`


const Button = styled.button`
    margin-top: 2rem;
    background-color: rgb(139, 139, 236);
`

const TOSConditionsContainer = styled.div`
    outline: 0.2rem solid blue;
    padding: 1rem 1rem;
    margin-top: 1rem;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    
`

const DivContainer = styled.div`
    outline: 0.2rem solid red;
    width: 15rem;
    heigth: 3rem;

    padding: 0rem 3rem 3rem 3rem;
    margin-left: 2rem;
`


export default SignupForm;