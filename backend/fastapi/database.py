import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv("MONGODB_URL"))
db = client.get_database("rpl")

alzheimer_preds = db.get_collection("alzheimer_preds")
pneumonia_preds = db.get_collection("pneumonia_preds")


