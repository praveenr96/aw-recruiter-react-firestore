import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'
import { auth } from '../firebase/config'

const LoggedInLinks = () => {
    const { setCurrentUser } = useContext(UserContext);
    const handleClick = async () => {
        await auth.signOut();
        setCurrentUser(null);
    }

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recruiter">Recruiter</Link></li>
                <li><Link to="/assigncandidates">Assign</Link></li>
                <li><Link to="/candidates">Candidates</Link></li>
                <li><Link to="/interviewer">Interviewer</Link></li>
                <li><Link to="/candidatestatus">Status</Link></li>
                <li><Link to="/" onClick={handleClick}>Logout</Link></li>
            </ul>
        </div>
    )
}

export default LoggedInLinks
