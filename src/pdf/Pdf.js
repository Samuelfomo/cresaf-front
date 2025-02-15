import html2pdf from 'html2pdf.js'

const pdfGenerator = {
    async generatePdf(element, filename, openInNewTab = false) {
        const options = {
            margin: 1,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,  // Permet le chargement des images
                allowTaint: true, // Permet le rendu des images externes
                logging: true,    // Active les logs pour le debug
                // Attendre que tout le contenu soit chargé
                // onrendered: function(canvas) {
                //     document.body.appendChild(canvas);
                // }
            },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }

        try {
            if (!openInNewTab) {
                // Pour le téléchargement direct
                return html2pdf().from(element).set(options).save()
            }

            // Pour l'ouverture dans un nouvel onglet
            const pdf = await html2pdf().from(element).set(options).outputPdf("blob")

            // Attendre un court instant pour s'assurer que le PDF est généré
            await new Promise(resolve => setTimeout(resolve, 100))

            const blob = new Blob([pdf], { type: 'application/pdf' })
            const url = URL.createObjectURL(blob)
            window.open(url, '_blank')

            // Nettoyer l'URL après un délai
            setTimeout(() => {
                URL.revokeObjectURL(url)
            }, 100)

            return true
        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error)
            throw error
        }
    }
}

export default pdfGenerator