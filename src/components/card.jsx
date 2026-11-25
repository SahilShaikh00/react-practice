
import './Card.css'

function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img 
                    src="https://i.pravatar.cc/150?img=12" 
                    alt="Profile"
                />
            </div>

            <h2>Sahil Shaikh</h2>
            <p>React JS Beginner Developer</p>

            <button>View Profile</button>
        </div>
    )
}

export default Card
