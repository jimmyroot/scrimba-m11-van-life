


import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAr0hAI-PmsQpXIKh3lVCXeCzwcnEB5zaU",
  authDomain: "van-life-3d16f.firebaseapp.com",
  projectId: "van-life-3d16f",
  storageBucket: "van-life-3d16f.firebasestorage.app",
  messagingSenderId: "310098920045",
  appId: "1:310098920045:web:cbd7c4f77183455f76b564"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getVans() {
    return (await getDocs(collection(db, "vans")))
        .docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
}

export async function getVan(id) {
    const snapshot = await getDoc(doc(db, "vans", id))
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    return (
        await getDocs(
            query(
                collection(db, "vans"),
                where("hostId", "==", "123")
            )
        )
    ).docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}


// export async function getVans() {
//     const response = await fetch("/api/vans")

//     if (!response.ok) {
//         throw {
//             message: "Failed to fetch vans from the API",
//             statusText: response.statusText,
//             status: response.status
//         }
//     }

//     const data = await response.json()
//     return data.vans
// }

// export async function getHostVans(id) {

//     const requestPath = id ? `/api/host/vans/${id}` : "/api/host/vans"

//     const response = await fetch(requestPath)

//     if (response.ok) {
//         const data = await response.json()
//         return id ? data.vans[0] : data.vans
//     } else {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
// }

export async function loginUser(creds) {
    const response = await fetch(
        "/api/login",
        {
            method: "post",
            body: JSON.stringify(creds)
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw {
            message: data.message,
            statusText: response.statusText,
            status: response.status
        }
    } 

    return data
}