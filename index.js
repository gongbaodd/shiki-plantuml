const fs = require('fs')
const path = require('path')
const plist = require('plist')

export function loadXmlGrammar() {
    const filePath = path.resolve(__dirname, './PlantUML.tmbundle/Syntaxes/PlantUML.tmLanguage');

  try {
    const xmlContent = fs.readFileSync(filePath, 'utf8');
    // plist.parse() will convert the XML Property List into a JS object
    return plist.parse(xmlContent);
  } catch (error) {
    console.error(`Error loading or parsing PlantUML grammar from ${filePath}:`, error);
    // Return a minimal valid grammar structure to prevent build errors,
    // though highlighting for PlantUML might not work if parsing failed.
    return {
      name: 'PlantUML',
      scopeName: 'source.plantuml', // Fallback scopeName
      patterns: []
    };
  }
}

