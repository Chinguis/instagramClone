export default function CreateAccount() {

    function create(formData) {
        const profileName = formData.get("profileName");
        const profilePicture = formData.get("profilePicture");
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(profileName, profilePicture, email, password);
    }

    return (
        <>
            <p>CreateAccount component</p>
            <form action={create}>
                <label htmlFor="profileName">Profile name:</label>
                <input id="profileName" name="profileName" type="text" placeholder="Joe Schmoe" />
                <br />

                <label htmlFor="profilePicture">Profile picture:</label>
                <input id="profilePicture" name="profilePicture" type="text" placeholder="joeSchmoe.jpg" />
                <br />

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="joe@schmoe.com" />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" />
                <br />

                <button>Submit</button>
            </form>
        </>
    );
}