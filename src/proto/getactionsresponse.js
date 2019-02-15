/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iotexapi.GetActionsResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iproto.ActionPb');


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
proto.iotexapi.GetActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotexapi.GetActionsResponse.displayName = 'proto.iotexapi.GetActionsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetActionsResponse.repeatedFields_ = [1];



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
proto.iotexapi.GetActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.iproto.ActionPb.toObject, includeInstance)
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
 * @return {!proto.iotexapi.GetActionsResponse}
 */
proto.iotexapi.GetActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetActionsResponse;
  return proto.iotexapi.GetActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetActionsResponse}
 */
proto.iotexapi.GetActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iproto.ActionPb;
      reader.readMessage(value,proto.iproto.ActionPb.deserializeBinaryFromReader);
      msg.addActions(value);
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
proto.iotexapi.GetActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.iproto.ActionPb.serializeBinaryToWriter
    );
  }
};


/**
 * repeated iproto.ActionPb actions = 1;
 * @return {!Array<!proto.iproto.ActionPb>}
 */
proto.iotexapi.GetActionsResponse.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.iproto.ActionPb>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iproto.ActionPb, 1));
};


/** @param {!Array<!proto.iproto.ActionPb>} value */
proto.iotexapi.GetActionsResponse.prototype.setActionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iproto.ActionPb=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iproto.ActionPb}
 */
proto.iotexapi.GetActionsResponse.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iproto.ActionPb, opt_index);
};


proto.iotexapi.GetActionsResponse.prototype.clearActionsList = function() {
  this.setActionsList([]);
};

