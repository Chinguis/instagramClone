export default function CreateAccount() {

    function submit(formData) {
        const profileName = formData.get("profileName");
        const profilePicture = formData.get("profilePicture");
        const email = formData.get("email");
        const password = formData.get("password");

        fetch("http://localhost:8080/api/auth/public/createAccount", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: profileName,
                profilePicture,
                email,
                password
            }),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Account created successfully!");
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }

    return (
        <>
            <p>CreateAccount component</p>
            <form action={submit}>
                <label htmlFor="profileName">Profile name:</label>
                <input id="profileName" name="profileName" type="text" placeholder="Joe Schmoe" required />
                <br />

                <label htmlFor="profilePicture">Profile picture:</label>
                <input id="profilePicture" name="profilePicture" type="text" placeholder="joeSchmoe.jpg" required />
                <br />

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="joe@schmoe.com" required />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <br />

                <button>Submit</button>
            </form>
        </>
    );
}