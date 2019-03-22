import * as jspb from "google-protobuf";

import * as action_pb from "./action_pb";
import * as endorsement_pb from "./endorsement_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BlockHeader extends jspb.Message {
  constructor();
  getCore(): BlockHeaderCore | undefined;
  setCore(value?: BlockHeaderCore): void;
  clearCore(): void;
  getProducerpubkey(): {};
  setProducerpubkey(value: {}): void;
  getSignature(): {};
  setSignature(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockHeader
  ): BlockHeader.AsObject;
  static serializeBinaryToWriter(
    message: BlockHeader,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(
    message: BlockHeader,
    reader: jspb.BinaryReader
  ): BlockHeader;
}

export declare namespace BlockHeader {
  export type AsObject = {
    core?: BlockHeaderCore.AsObject;
    producerpubkey: {};
    signature: {};
  };
}

export class BlockHeaderCore extends jspb.Message {
  constructor();
  getVersion(): number;
  setVersion(value: number): void;
  getHeight(): number;
  setHeight(value: number): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearTimestamp(): void;
  getPrevblockhash(): {};
  setPrevblockhash(value: {}): void;
  getTxroot(): {};
  setTxroot(value: {}): void;
  getDeltastatedigest(): {};
  setDeltastatedigest(value: {}): void;
  getReceiptroot(): {};
  setReceiptroot(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeaderCore.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockHeaderCore
  ): BlockHeaderCore.AsObject;
  static serializeBinaryToWriter(
    message: BlockHeaderCore,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeaderCore;
  static deserializeBinaryFromReader(
    message: BlockHeaderCore,
    reader: jspb.BinaryReader
  ): BlockHeaderCore;
}

export declare namespace BlockHeaderCore {
  export type AsObject = {
    version: number;
    height: number;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    prevblockhash: {};
    txroot: {};
    deltastatedigest: {};
    receiptroot: {};
  };
}

export class BlockFooter extends jspb.Message {
  constructor();
  getCommittimestamp(): number;
  setCommittimestamp(value: number): void;
  getEndorsements(): endorsement_pb.EndorsementSet | undefined;
  setEndorsements(value?: endorsement_pb.EndorsementSet): void;
  clearEndorsements(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockFooter.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockFooter
  ): BlockFooter.AsObject;
  static serializeBinaryToWriter(
    message: BlockFooter,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockFooter;
  static deserializeBinaryFromReader(
    message: BlockFooter,
    reader: jspb.BinaryReader
  ): BlockFooter;
}

export declare namespace BlockFooter {
  export type AsObject = {
    committimestamp: number;
    endorsements?: endorsement_pb.EndorsementSet.AsObject;
  };
}

export class Block extends jspb.Message {
  constructor();
  getHeader(): BlockHeader | undefined;
  setHeader(value?: BlockHeader): void;
  clearHeader(): void;
  getActionsList(): action_pb.Action[] | undefined;
  setActionsList(value?: action_pb.Action[]): void;
  clearActionsList(): void;
  getFooter(): BlockFooter | undefined;
  setFooter(value?: BlockFooter): void;
  clearFooter(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(
    message: Block,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(
    message: Block,
    reader: jspb.BinaryReader
  ): Block;
}

export declare namespace Block {
  export type AsObject = {
    header?: BlockHeader.AsObject;
    actionsList?: action_pb.Action.AsObject[];
    footer?: BlockFooter.AsObject;
  };
}

export class Receipts extends jspb.Message {
  constructor();
  getReceiptsList(): action_pb.Receipt[] | undefined;
  setReceiptsList(value?: action_pb.Receipt[]): void;
  clearReceiptsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipts.AsObject;
  static toObject(includeInstance: boolean, msg: Receipts): Receipts.AsObject;
  static serializeBinaryToWriter(
    message: Receipts,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Receipts;
  static deserializeBinaryFromReader(
    message: Receipts,
    reader: jspb.BinaryReader
  ): Receipts;
}

export declare namespace Receipts {
  export type AsObject = {
    receiptsList?: action_pb.Receipt.AsObject[];
  };
}

export class EpochData extends jspb.Message {
  constructor();
  getNum(): number;
  setNum(value: number): void;
  getHeight(): number;
  setHeight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochData.AsObject;
  static toObject(includeInstance: boolean, msg: EpochData): EpochData.AsObject;
  static serializeBinaryToWriter(
    message: EpochData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EpochData;
  static deserializeBinaryFromReader(
    message: EpochData,
    reader: jspb.BinaryReader
  ): EpochData;
}

export declare namespace EpochData {
  export type AsObject = {
    num: number;
    height: number;
  };
}

export class ChainMeta extends jspb.Message {
  constructor();
  getHeight(): number;
  setHeight(value: number): void;
  getNumactions(): number;
  setNumactions(value: number): void;
  getTps(): number;
  setTps(value: number): void;
  getEpoch(): EpochData | undefined;
  setEpoch(value?: EpochData): void;
  clearEpoch(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ChainMeta): ChainMeta.AsObject;
  static serializeBinaryToWriter(
    message: ChainMeta,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChainMeta;
  static deserializeBinaryFromReader(
    message: ChainMeta,
    reader: jspb.BinaryReader
  ): ChainMeta;
}

export declare namespace ChainMeta {
  export type AsObject = {
    height: number;
    numactions: number;
    tps: number;
    epoch?: EpochData.AsObject;
  };
}

export class BlockMeta extends jspb.Message {
  constructor();
  getHash(): string;
  setHash(value: string): void;
  getHeight(): number;
  setHeight(value: number): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;
  getNumactions(): number;
  setNumactions(value: number): void;
  getProduceraddress(): string;
  setProduceraddress(value: string): void;
  getTransferamount(): string;
  setTransferamount(value: string): void;
  getTxroot(): string;
  setTxroot(value: string): void;
  getReceiptroot(): string;
  setReceiptroot(value: string): void;
  getDeltastatedigest(): string;
  setDeltastatedigest(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMeta.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMeta): BlockMeta.AsObject;
  static serializeBinaryToWriter(
    message: BlockMeta,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockMeta;
  static deserializeBinaryFromReader(
    message: BlockMeta,
    reader: jspb.BinaryReader
  ): BlockMeta;
}

export declare namespace BlockMeta {
  export type AsObject = {
    hash: string;
    height: number;
    timestamp: number;
    numactions: number;
    produceraddress: string;
    transferamount: string;
    txroot: string;
    receiptroot: string;
    deltastatedigest: string;
  };
}

export class AccountMeta extends jspb.Message {
  constructor();
  getAddress(): string;
  setAddress(value: string): void;
  getBalance(): string;
  setBalance(value: string): void;
  getNonce(): number;
  setNonce(value: number): void;
  getPendingnonce(): number;
  setPendingnonce(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountMeta.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AccountMeta
  ): AccountMeta.AsObject;
  static serializeBinaryToWriter(
    message: AccountMeta,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AccountMeta;
  static deserializeBinaryFromReader(
    message: AccountMeta,
    reader: jspb.BinaryReader
  ): AccountMeta;
}

export declare namespace AccountMeta {
  export type AsObject = {
    address: string;
    balance: string;
    nonce: number;
    pendingnonce: number;
  };
}
