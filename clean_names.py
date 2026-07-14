import os
import json
import re

game_dir = r"C:\Users\junir\.gemini\antigravity\scratch\jogo-das-chumbadas"
json_path = os.path.join(game_dir, "public", "chumbadas_data.json")

def setup_and_clean():
    base_dir = r"C:\Users\junir\.gemini\antigravity\scratch"
    game_img_dir = os.path.join(game_dir, "public", "assets", "images")
    
    data = []
    for file in os.listdir(game_img_dir):
        if file.endswith(('.jpg', '.png', '.jpeg')):
            name_no_ext = os.path.splitext(file)[0]
            
            # Exclude kits and jig heads early
            if "kit" in name_no_ext.lower() or "jig" in name_no_ext.lower():
                continue
                
            words = name_no_ext.split('-')
            formatted_name = ' '.join([w.capitalize() for w in words])
            
            data.append({
                "name": formatted_name,
                "image": f"assets/images/{file}"
            })
            
    # Now clean the names
    cleaned_data = []
    unique_names = set()
    
    for item in data:
        name = item["name"]
        
        # 1. Remove weights/quantities patterns like "1 110g", "2 130g", "3 150g", "1 Kg"
        name = re.sub(r'\b\d+\s*\d+g\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\b\d+\s*Kg\b', '', name, flags=re.IGNORECASE)
        
        # 2. Remove specific variation words (case-insensitive)
        name = re.sub(r'\bNatural\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bHaste\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bOlhal\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bFurada\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bFurado\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bDuplo\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bMaior\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bMenor\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bMaiores\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bMenores\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bAnzois\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bAnzóis\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\b60\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bGraus\b', '', name, flags=re.IGNORECASE)
        
        # 3. Remove phrases
        name = re.sub(r'\bCom\s+Mola\s+Sapatinho\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bCom\s+Cauda\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bSem\s+Cauda\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bCom\s+Asa\b', '', name, flags=re.IGNORECASE)
        
        # 4. Remove left over connectors at the end or double connectors
        name = re.sub(r'\bCom\s+De\s+Chumbo\b', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\bDe\s+Chumbo\b', '', name, flags=re.IGNORECASE)
        
        # Strip trailing "Com" or "Sem" or "De"
        name = re.sub(r'\b(Com|Sem|De)\b\s*$', '', name, flags=re.IGNORECASE)
        
        # Clean multiple spaces and trim
        name = re.sub(r'\s+', ' ', name).strip()
        
        # Clean double trailing prepositions again just in case
        name = re.sub(r'\b(Com|Sem|De)\b\s*$', '', name, flags=re.IGNORECASE)
        name = re.sub(r'\s+', ' ', name).strip()
        
        unique_names.add(name)
        cleaned_data.append({
            "name": name,
            "image": item["image"]
        })
        
    print(f"Total items (excl. kits & jigs): {len(data)}")
    print(f"Unique names after cleanup: {len(unique_names)}")
    print("--- Unique Names List ---")
    for i, n in enumerate(sorted(list(unique_names))):
        print(f"{i+1:3d}. {n}")
        
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, indent=4, ensure_ascii=False)
        
    # Copy to dist too
    dist_json_path = os.path.join(game_dir, "dist", "chumbadas_data.json")
    with open(dist_json_path, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, indent=4, ensure_ascii=False)

setup_and_clean()
