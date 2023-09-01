import { useState, useEffect } from "react";
import OccurrenceMap from "./OcurrenceMap";
import "../assets/styles/speciesSheet.css"

const SpeciesSheet = () => {
  
    const [species, setSpecies] = useState([])
    
    useEffect(() => {
        
        const url = 'https://api.gbif.org/v1/species/match?name=Passer%20domesticus'
       
        fetch(url)
          .then((response) => response.json())
          .then((jsonData) => setSpecies(jsonData))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    return (
        <article>
                <table>
                    <tbody>
                        <tr>
                            <th>Scientific name</th>
                            <td>{species.scientificName}</td>
                        </tr>
                        
                        <tr>
                            <th>Kingdom</th>
                            <td>{species.kingdom}</td>
                        </tr>
                        
                        <tr>
                            <th>Phylum</th>
                            <td>{species.phylum}</td>
                        </tr>
                        <tr>
                            <th>Order</th>
                            <td>{species.order}</td>
                        </tr>
                        <tr>
                            <th>Family</th>
                            <td>{species.family}</td>
                        </tr>
                        <tr>
                            <th>Distribution and habitat</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Conservation Status</th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <OccurrenceMap/>
        </article>
    )
}

export default SpeciesSheet;