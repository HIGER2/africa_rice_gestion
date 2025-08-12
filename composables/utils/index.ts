
import { utils, writeFileXLSX } from "xlsx";
import * as XLSX from "xlsx";
import dayjs from "dayjs";

export const useUtilsStores=()=>{

    const formatError=(error:Record<string,any>): string =>{
        let errorMessages: string= '';
        for (const field in error) {
            if (error.hasOwnProperty(field)) {
                error[field].forEach((msg:string) => {
                errorMessages += `- ${msg}\n`;
                });
            }
        }
        return errorMessages
    }

    const importExcell = (data:any,headersMap:any)=>{

        // // 1. Convertir les données JS en feuille Excel
        // const worksheet = utils.json_to_sheet(data);

        // // 2. Créer un nouveau classeur (workbook) et y ajouter la feuille
        // const workbook = utils.book_new();
        // utils.book_append_sheet(workbook, worksheet, "Employés");
        // // 3. Générer et déclencher le téléchargement du fichier Excel
        // writeFileXLSX(workbook, "employes.xlsx");

                    // 1. Extraire l’ordre des colonnes à partir des clés du mapping
            const keys = Object.keys(headersMap);

            // 2. Filtrer et ordonner les données selon ces clés
            const filteredData = data.map((item:any) => {
            const filteredItem:Record<string,string> = {};
            keys.forEach(key => {
                filteredItem[key] = item[key] ?? ""; // Remplir avec "" si clé absente
            });
            return filteredItem;
            });

            // 3. Créer la feuille Excel
            const worksheet = utils.json_to_sheet(filteredData, { header: keys });

            // 4. Remplacer la première ligne (entêtes) par les labels du mapping
            keys.forEach((key, i) => {
            const cellAddress = String.fromCharCode(65 + i) + "1"; // 'A1', 'B1', 'C1', ...
            worksheet[cellAddress].v = headersMap[key];
            });

            // 5. Créer un classeur et y insérer la feuille
            const workbook = utils.book_new();
            utils.book_append_sheet(workbook, worksheet, "Employés");

            // 6. Exporter en fichier Excel
            writeFileXLSX(workbook, "export_employes.xlsx");
    }

        
    const useXlsx = (
    data: any[],
    columns: [],
    t?: (key: string) => string // ✅ t est optionnel
    ): void => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        alert("Aucune donnée à exporter");
        return;
    }

            // const formattedData = data.map((item: any, index: number) => {
            //     const row: Record<string, any> = {
            //     id: index + 1,
            //     };
            //     columns.forEach(({ key, label }) => {
            //     const columnLabel = t ? t(label) : label;
            //     let value = item[key];

            //     if (value && typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2} /)) {
            //         value = dayjs(value).format("DD/MM/YYYY HH:mm");
            //     }

            //     row[columnLabel] = value;
            //     });
            //     return row;
            // });

            // console.log(formattedData);


            // Transforme l'objet header en tableau d'objets {key, label}
            const header = Object.entries(columns).map(([key, label]) => ({ key, label }));

            const formattedData = data.map((item: any, index: number) => {
            const row: Record<string, any> = { id: index + 1 };

            header.forEach(({ key, label }) => {
                let value = item[key];
                // Format date si c'est une date sous forme string "YYYY-MM-DD ..."
                if (value && typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2} /)) {
                value = dayjs(value).format("DD/MM/YYYY HH:mm");
                }

                // Utilise le label comme clé dans la ligne exportée
                row[label] = value;
            });

            return row;
            });
            
    // Génération du fichier Excel
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    // 2. Créer un nouveau classeur (workbook) et y ajouter la feuille
    const workbook = XLSX.utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Employés");

    // 3. Générer et déclencher le téléchargement du fichier Excel
        writeFileXLSX(workbook, "employes.xlsx");
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Feuille1");

    // const excelBuffer = XLSX.write(workbook, {
    //     bookType: "xlsx",
    //     type: "array",
    // });

    // const blob = new Blob([excelBuffer], {
    //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    // });

    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "data.xlsx";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    };
    return {
        formatError,
        importExcell,
        useXlsx
    }
}