from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "SymptoVox API is running 🚀"}

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    symptoms = data.get("symptoms", "")
    
    # Dummy AI logic
    if "cough" in symptoms.lower() or "sore throat" in symptoms.lower():
        return jsonify({"diagnosis": "Likely common cold", "probability": 0.8})
    else:
        return jsonify({"diagnosis": "Unclear", "probability": 0.3})

if __name__ == "__main__":
    app.run(debug=True)
