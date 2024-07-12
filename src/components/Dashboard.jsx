import React from "react"

import user from '../data/user.json';

import UserInfos from '../components/UserInfos';

export default function Dashboard() {
    const firstName = user.user.userInfos.firstName
    return (
        <UserInfos name={firstName} />
    )
}