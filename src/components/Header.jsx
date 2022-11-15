function Header() {
    return (
        <h1 className="text-5xl font-black text-center w-full p-16 bg-slate-800 text-indigo-100">
            Pet {''}
            <span className="text-indigo-500">Hospital</span> {''}
            <span className="material-symbols-outlined text-4xl animate-spin ease-in-out">cruelty_free</span>
        </h1>
    )
}


export {Header as default}