import face_recognition
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from PIL import Image

def reconhecimento_facial(imagem_path, faces_conhecidas):
    # Carrega a imagem
    imagem = face_recognition.load_image_file(imagem_path)

    # Encontra os rostos na imagem
    rostos = face_recognition.face_locations(imagem)
    encodings_rostos = face_recognition.face_encodings(imagem, rostos)

    # Carrega as faces conhecidas
    faces_conhecidas_encodings = [face_recognition.face_encodings(face)[0] for face in faces_conhecidas]

    # Inicializa o plot
    plt.imshow(imagem)
    ax = plt.gca()

    # Percorre os rostos encontrados na imagem
    for (top, right, bottom, left), face_encoding in zip(rostos, encodings_rostos):
        # Compara o rosto atual com as faces conhecidas
        matches = face_recognition.compare_faces(faces_conhecidas_encodings, face_encoding)

        name = "Desconhecido"

        # Se uma correspondência for encontrada, usa o nome correspondente
        if True in matches:
            first_match_index = matches.index(True)
            name = f"Rosto {first_match_index + 1}"

        # Adiciona um retângulo e o nome ao plot
        rect = patches.Rectangle((left, top), right - left, bottom - top, linewidth=2, edgecolor='g', facecolor='none')
        ax.add_patch(rect)
        plt.text(left, top - 6, name, fontsize=8, color='g', backgroundcolor='black')

    plt.show()

# Exemplo de uso
imagem_path = 'caminho/para/sua/imagem.jpg'
faces_conhecidas = ['1.png', '2.png']  # Adicione mais faces conhecidas, se necessário

reconhecimento_facial(imagem_path, faces_conhecidas)
