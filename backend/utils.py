# Utility functions for preprocessing or loading models

def preprocess_image(image, transform):
    return transform(image).unsqueeze(0)
