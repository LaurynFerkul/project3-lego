import redLegoTop from "./assets/redLegoTop.svg";

const displayLegoSets = (props) => {
    console.log(props.legoSets)
    return (
        <section className="displaySets"> 
            {
            props.legoSets.length === 0 
                ? (<h2>Sorry no lego sets could be found</h2>)
                : (
                    <div className="wrapper">
                            <h2>{`Sets found in ${props.legoSets[0].year}`}</h2>
                        <ul>
                        { props.legoSets.map((legoSet) => {
                            // console.log(legoSet);
                            const key = parseInt(legoSet.set_num.replace("-",""))
                            console.log(key);
                            return (
                                <>
                                    
                                    <li key={key}>
                                        <img class="redLogoTop" aria-hidden="true" src={redLegoTop} alt="" />
                                        <div className="legoSetInfo">
                                            <img src={legoSet.set_img_url} alt={legoSet.name} />
                                            <h3>{legoSet.name}</h3>
                                        </div>
                                    </li>   
                                </>               
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