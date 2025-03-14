/**
* Ottieni dettaglio elemento Wikidata
* @param {string} viafId - ID Authority Cluster VIAF "102333412"
* @param {string} [endpoint="viaf.org"] - opzionale
* @returns {Array<string>|[]} - Ritorna un array di titoli
*/

const getViafWorksById = async (viafId, endpoint = "viaf.org") => {

    try {
      
        const url = `https://${endpoint}/viaf/${viafId}`;
        const headers = new Headers({
            "Accept": "application/json"
        });
        const response = await fetch(url, { headers });
        const json = await response.json();
        const work_array = json['ns1:VIAFCluster']['ns1:titles']['ns1:work']
        
        let response_array = []

        work_array.forEach(work => {
            response_array.push(work['ns1:title'])
        })

        return response_array;
    
    } catch { 
      return []; 
    }
  
};
  
export { getViafWorksById };