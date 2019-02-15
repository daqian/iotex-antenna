/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.LogPb');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iproto.LogPb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iproto.LogPb.repeatedFields_, null);
};
goog.inherits(proto.iproto.LogPb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.LogPb.displayName = 'proto.iproto.LogPb';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iproto.LogPb.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iproto.LogPb.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.LogPb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.LogPb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.LogPb.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topicsList: msg.getTopicsList_asB64(),
    data: msg.getData_asB64(),
    blocknumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    txnhash: msg.getTxnhash_asB64(),
    blockhash: msg.getBlockhash_asB64(),
    index: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iproto.LogPb}
 */
proto.iproto.LogPb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.LogPb;
  return proto.iproto.LogPb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.LogPb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.LogPb}
 */
proto.iproto.LogPb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTopics(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocknumber(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxnhash(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockhash(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iproto.LogPb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.LogPb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.LogPb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.LogPb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopicsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getBlocknumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTxnhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getBlockhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.iproto.LogPb.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.iproto.LogPb.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bytes topics = 2;
 * @return {!Array<string>}
 */
proto.iproto.LogPb.prototype.getTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes topics = 2;
 * This is a type-conversion wrapper around `getTopicsList()`
 * @return {!Array<string>}
 */
proto.iproto.LogPb.prototype.getTopicsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTopicsList()));
};


/**
 * repeated bytes topics = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTopicsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.iproto.LogPb.prototype.getTopicsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTopicsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.iproto.LogPb.prototype.setTopicsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.iproto.LogPb.prototype.addTopics = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.iproto.LogPb.prototype.clearTopicsList = function() {
  this.setTopicsList([]);
};


/**
 * optional bytes data = 3;
 * @return {string}
 */
proto.iproto.LogPb.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.iproto.LogPb.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.iproto.LogPb.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.LogPb.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 blockNumber = 4;
 * @return {number}
 */
proto.iproto.LogPb.prototype.getBlocknumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.iproto.LogPb.prototype.setBlocknumber = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes txnHash = 5;
 * @return {string}
 */
proto.iproto.LogPb.prototype.getTxnhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes txnHash = 5;
 * This is a type-conversion wrapper around `getTxnhash()`
 * @return {string}
 */
proto.iproto.LogPb.prototype.getTxnhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxnhash()));
};


/**
 * optional bytes txnHash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxnhash()`
 * @return {!Uint8Array}
 */
proto.iproto.LogPb.prototype.getTxnhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxnhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.LogPb.prototype.setTxnhash = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes blockHash = 6;
 * @return {string}
 */
proto.iproto.LogPb.prototype.getBlockhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes blockHash = 6;
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {string}
 */
proto.iproto.LogPb.prototype.getBlockhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockhash()));
};


/**
 * optional bytes blockHash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockhash()`
 * @return {!Uint8Array}
 */
proto.iproto.LogPb.prototype.getBlockhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.LogPb.prototype.setBlockhash = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional uint32 index = 7;
 * @return {number}
 */
proto.iproto.LogPb.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.iproto.LogPb.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};

