export default function Login() {

    function submit(formData) {
        const email = formData.get("email");
        const password = formData.get("password");

        fetch("http://localhost:8080/api/auth/public/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: "include",
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("Logged in successfully!");
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }

    return (
        <>
            <p>Login component</p>
            <form action={submit}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="joe@schmoe.com" required />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <br />

                <button>Submit</button>
            </form>
        </>
    )
}