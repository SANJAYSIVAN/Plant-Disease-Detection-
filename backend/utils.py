from torchvision import transforms
from PIL import Image
import torch

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485,0.456,0.406],[0.229,0.224,0.225])
])

def preprocess_image(image_bytes):
    image = Image.open(image_bytes).convert("RGB")
    return transform(image).unsqueeze(0)

def predict_class(model, image_tensor, classes):
    with torch.no_grad():
        outputs = model(image_tensor)
        _, pred = outputs.max(1)
        confidence = torch.nn.functional.softmax(outputs, dim=1)[0][pred].item()
    return classes[pred], confidence
