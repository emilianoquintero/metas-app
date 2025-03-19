function Principal({children}) {

    return (
     
        <div>
            <sidenav>
                <a href="/lista">Lista</a>
                <a href="/crear">Crear</a>
            </sidenav>
            <main>
                {children}
            </main>
        </div>
    )
  }
  
  export default Principal
  