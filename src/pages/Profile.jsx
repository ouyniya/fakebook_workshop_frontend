import React from 'react'
import useUserStore from '../stores/userStores'

function Profile() {
    const user = useUserStore(state => state.user)

  return (
    <div className='flex items-center gap-3'>

    <div className='rounded-full overflow-hidden w-[50px]'>
        <img src={user.profileImage} alt="profile image" />
    </div>
        <div className="text-xl">{user.firstName} {user.lastName}</div>

    </div>
  )
}

export default Profile