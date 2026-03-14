import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def run_tests():
    print("Testing /")
    response = client.get("/")
    print(f"Status: {response.status_code}")
    print(response.json())
    
    print("\nTesting /api/v1/courses/")
    response = client.get("/api/v1/courses/")
    print(f"Status: {response.status_code}")
    if response.status_code != 200:
        print(response.text)
        
    print("\nTesting /api/v1/user/profile")
    response = client.get("/api/v1/user/profile")
    print(f"Status: {response.status_code}")
    if response.status_code != 200:
        print(response.text)

    print("\nTesting /api/v1/user/progress")
    response = client.get("/api/v1/user/progress")
    print(f"Status: {response.status_code}")
    if response.status_code != 200:
        print(response.text)
        
    print("\nTesting /api/v1/admin/stats")
    try:
        response = client.get("/api/v1/admin/stats")
        print(f"Status: {response.status_code}")
        if response.status_code != 200:
            print(response.text)
    except Exception as e:
        print(f"Error on admin/stats: {e}")

if __name__ == "__main__":
    run_tests()
