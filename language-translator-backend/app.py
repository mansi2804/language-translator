from flask import Flask, jsonify, request
from googletrans import Translator
from flask_cors import CORS
       
app = Flask(__name__)
CORS(app)  # Allow all CORS requests
 
# Initialize the translator
translator = Translator()

# Route for translation
@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get('text')
    target_language = data.get('target_language')

    if not text or not target_language:
        return jsonify({'error': 'Invalid input'}), 400

    # Translate the text
    translated = translator.translate(text, dest=target_language)
    return jsonify({'translated_text': translated.text})

if __name__ == '__main__':
    app.run(debug=True)
