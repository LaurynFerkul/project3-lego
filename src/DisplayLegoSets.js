const displayLegoSets = (props) => {
    return (
        <section> 
            {
            props.legoSets.length === 0 
                ? (<h2>Sorry no lego sets could be found</h2>)
                : (
                    <div className="legoSets">
                        <h2>Lego Sets Found</h2>
                        <ul>
                        { props.legoSets.map((legoSet) => {
                            // console.log(legoSet);
                            const key = parseInt(legoSet.set_num.replace("-",""))
                            return (
                                <li key={key}>
                                    <img src={legoSet.set_img_url} alt={legoSet.name} />
                                    <h3>{legoSet.name}</h3>
                                </li>                  
                            )
                        })
                        }
                        </ul>
                    </div>
                )
            }
        </section>
    )
}

export default displayLegoSets;