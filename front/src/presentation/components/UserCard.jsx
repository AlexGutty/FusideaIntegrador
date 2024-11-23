const UserCard = ({ profileImage, name, specialty }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
        <img 
          src={profileImage} 
          alt={`${name}'s profile`} 
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 mb-4">{specialty}</p>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {/* Handle profile navigation */}}
        >
          Ver Perfil
        </button>
      </div>
    );
  }
  
  export default UserCard;