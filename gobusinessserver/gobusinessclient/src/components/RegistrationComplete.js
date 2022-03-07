import Modal from "./Modal"

const RegistraionComplete = (props) => {
    const handleClick = () => {
        props.setRegistered(false);
        props.setRegisterFormOpen(false);
        props.setLoginFormOpen(true);
    }
    return <Modal>
    <h1>Registration Complete</h1>
    <button onClick={handleClick}>Proceed To Login</button>
    </Modal>
}

export default RegistraionComplete;