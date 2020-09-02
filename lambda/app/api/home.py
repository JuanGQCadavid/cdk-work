from flask import jsonify, request

from . import api

@api.route('/')
def home():
    return jsonify({'hello':'It works!'})

@api.route('/post', methods=['POST'])
def post():
    print(request.json)
    return request.json